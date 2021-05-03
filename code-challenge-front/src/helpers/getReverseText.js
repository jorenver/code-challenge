export const getReverseText = async (text) =>{
    const url = `http://localhost:5000/iecho?text=${encodeURI(text)}`;
    return await fetch(url);
}