export const removeExtension = (filename) => filename.substring(0, filename.lastIndexOf('.')) || filename;

export const galleryMapper = (array) => {
    const sorted = array.sort();
    const mapped = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
        J: [],
        K: [],
        L: [],
        M: [],
        N: [],
        O: [],
        P: [],
        Q: [],
        R: [],
        S: [],
        T: [],
        U: [],
        V: [],
        W: [],
        X: [],
        Y: [],
        Z: [],
        others: []
    }
    sorted.forEach(element => {
        try {
            mapped[element.charAt(0).toUpperCase()].push(element)
        } catch {
            mapped.others.push(element)
        }
        
    });

    return mapped
}