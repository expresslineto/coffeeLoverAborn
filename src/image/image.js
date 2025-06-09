// import page1 from "./Aborn/lover aborn 2023-03-036.jpg";
// import page2 from "./Aborn/lover aborn 2023-03-037.jpg";
// import page3 from "./Aborn/lover aborn 2023-03-038.jpg";
// import page4 from "./Aborn/lover aborn 2023-03-039.jpg";
// import page5 from "./Aborn/lover aborn 2023-03-0310.jpg";
// import page6 from "./Aborn/lover aborn 2023-03-0311.jpg";

// import page7 from "./Aborn/lover aborn 2024-02-05.jpg"
// import page8 from "./Aborn/lover aborn 2024-02-052.jpg"

// import page9 from "./Aborn/lover tully 2024-06-163.jpg"
// import page10 from "./Aborn/lover tully 2024-07-014.jpg"
// import page11 from "./Aborn/lover tully 2024-07-015.jpg"


// const listMenu = [{
//         page: "1",
//         itemsImage: page1,
//     },
//     {
//         page: "2",
//         itemsImage: page2,
//     },
//     {
//         page: "3",
//         itemsImage: page3,
//     },
//     {
//         page: "4",
//         itemsImage: page4,
//     },
//     {
//         page: "5",
//         itemsImage: page5,
//     },
//     {
//         page: "6",
//         itemsImage: page6,
//     },{
//         page: "7",
//         itemsImage: page7,
//     },{
//         page: "8",
//         itemsImage: page8,
//     },{
//         page: "9",
//         itemsImage: page9,
//     },{
//         page: "10",
//         itemsImage: page10,
//     },
//     {
//         page: "11",
//         itemsImage: page11,
//     },
// ];
// export default listMenu;
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
const images = importAllImages(require.context('./Aborn', false,/\.(jpg)$/));
const listMenu =saveImage(images);
export default listMenu;