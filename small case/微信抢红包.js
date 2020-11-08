/**
 * warning:封了概不负责
 * 配合AutoJs运行
 */
var x = 0.63; //开的位置占屏幕长度的百分比 从上到下算起

var go = 1; //如果抢到一个红包之后还要继续抢，则设置go的值为1.不过需要手动关闭抢到红包的界面
//如果抢到一个红包之后不抢了，则设置go的值为0，退出脚本

var time1 = 0; //点“开”前等待时间，单位毫秒
var time2 = 0; //抢完红包后返回的等待时间，单位毫秒

var i = 0;
// 设备信息
var WIDTH = device.width,
  HEIGHT = device.height,
  TYPE = device.brand + " " + device.model;
device.keepScreenOn();
toast("开始辅助");

// 获取截图权限
if (!requestScreenCapture()) {
  toast("请求截图失败，程序结束");
  exit();
}

var lineHeight; // 每行消息的高度
var white = 255; // 消息行背景色
var gray = 153; // 文字的颜色
var totalCount = 0; // 总共获取的红包数量

do {
  // 获取截图
  var chat = captureScreen();
  for (let k = parseInt(HEIGHT * 0.9); k > parseInt(HEIGHT * 0.1); k--) {
    var point = images.pixel(chat, parseInt(WIDTH * 0.5), k);
    var red = colors.red(point),
      green = colors.green(point),
      blue = colors.blue(point);
    if (
      Math.abs(red - 250) + Math.abs(green - 158) + Math.abs(blue - 59) <=
      15
    ) {
      // 找到红包
      click(parseInt(WIDTH * 0.5), k);
      sleep(800);
      // 寻找"开"
      chat = captureScreen();
      var count = 0;
      for (let y = parseInt(HEIGHT * 0.4); y < parseInt(HEIGHT * 0.8); y++) {
        var point = images.pixel(chat, parseInt(WIDTH * 0.5), y);
        var red = colors.red(point),
          green = colors.green(point),
          blue = colors.blue(point);
        if (
          Math.abs(red - 235) + Math.abs(green - 205) + Math.abs(blue - 153) <=
          15
        ) {
          count += 1;
        }
      }
      if (count > HEIGHT * 0.4 * 0.1) {
        //"开"前等待
        sleep(time1);
        //有"开"触发click
        click(parseInt(WIDTH * 0.5), parseInt(HEIGHT * x));
        sleep(1000);
        toast("已按下'開'");
        //"开"后等待
        sleep(time2);
        click(10, HEIGHT * 0.05);
        if (!go) {
          toast("脚本已退出，感谢使用");
          exit();
        } else {
          toast("本次运行已抢红包" + ++i + "个");
        }
      }
    }
  }
} while (true);
