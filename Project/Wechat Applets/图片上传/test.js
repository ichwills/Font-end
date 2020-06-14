upload_picture: function (name) {
    var that = this
    //让用户选择或拍摄一张照片
    wx.chooseImage({
      count: 1,	
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
      //选择完成会先返回一个临时地址保存备用
        const tempFilePaths = res.tempFilePaths
        //将照片上传至云端需要刚才存储的临时地址
        wx.cloud.uploadFile({
          cloudPath: 'test.jpg',
          filePath: tempFilePaths[0],
          success(res) {
          //上传成功后会返回永久地址
           	console.log(res.fileID) 
          }
        })
      }
    })
  }