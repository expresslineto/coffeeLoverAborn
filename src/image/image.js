export function importAllImages(r){
    let images = {};
    r.keys().forEach((key) => {
        const imageName = key.replace('./', '');
        images[imageName]= r(key);
    });
    return images
}
export function saveImage(r){
    function popAny(obj){
        const keys = Object.keys(obj);
        if(keys.length ===0) return undefined;
        const key = keys[0];
        const value =obj[key];
        delete obj[key];
        return value;
    }
    let list = [];
    let key = 0;
    while (Object.keys(r).length > 0){
        
            const value = popAny(r);
            if (value !== undefined){
                list.push({page:key, itemsImage:value});
                key +=1
            }else 
               {break}
       
    }
    return list
}
const images = importAllImages(require.context('./aborn', false,/\.(jpg)$/));
const listMenu =saveImage(images);
export default listMenu;