

export class GetData {
    constructor() { }

    async getBookItems(dataURL) {
        const result = await fetch(`data/popular/${dataURL}.json`)//
            .then(response => response.json());
        return result;
    }

    async searchBookItems(keyword) {
        const result = await fetch(`data/popular/searchResult.json`)//
            .then(response => response.json())//
            //// 문자열 띄어쓰기로 인한 keyword 불일치 방지 위해  문자열 공백 제거
            .then(result => result.item.filter((item) => item.title.replace(/(\s*)/g, "").includes(keyword.replace(/(\s*)/g, ""))))//
            .then(result => result.slice(0, 1));// 검색 결과 중복 item 출력 방지 위해 slice 사용
        return result;
    }
}

