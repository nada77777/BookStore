

export class GetData {
    constructor() { }

    async getBookItems(dataType) {
        const result = await fetch(`data/popular/${dataType}.json`)//
            .then(response => response.json());
        return result;
    }

    async searchBookItems(keyword) {
        const result = await fetch(`data/popular/searchResult.json`)//
            .then(response => response.json())//
            .then(result => result.item.filter((item) => item.title.replace(/(\s*)/g, "").includes(keyword.replace(/(\s*)/g, ""))))//
            .then(result => result.slice(0, 1));
        return result;
    }
}

