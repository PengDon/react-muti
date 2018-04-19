
const ImgUtil = {};

/**
 * 图片压缩
 * 
 * @param {any} path pc端传入的路径可以为相对路径，但是在移动端上必须传入的路径是照相图片储存的绝对路径
 * @param {any} obj 对象 [width， height， quality(0-1)]
 * @param {any} callback 
 */
ImgUtil.compressedPic = async (path, obj, callback) => {
    let img = new Image();
    img.src = path;
    img.onload = (callback) => {
        let that = this;
        let w = that.width;
        let h = that.height;
        let scale = w / h;

        w = obj.width || w;
        h = obj.height || h;
        // 默认图片质量为0.7
        let quality = 0.7;
        // 生成canvas
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        // 创建属性节点
        let anw = document.createElement('width');
        let anh = document.createElement('height');
        anw.nodeValue = w;
        anh.nodeValue = h;

        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图片质量
        if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
            quality = obj.quality;
        }
        let base64 = canvas.toDataURL('image/jpeg', quality);
        callback(base64);
    }
};

/**
 * dataURL to blob
 * 
 * @param {any} dataUrl 图片base64 CODE
 */
ImgUtil.dataURLtoBlob = (dataUrl) => {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

/**
 * blob to dataURL 
 * 
 * @param {any} blob
 * @param {any} callback 
 */
ImgUtil.blobToDataURL = async(blob,callback)=>{
    let a = new FileReader();
    a.onload = function (e) { callback(e.target.result); }
    a.readAsDataURL(blob);
}

export default ImgUtil;