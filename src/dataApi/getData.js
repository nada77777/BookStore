export class GetData {
    constructor() {

    }

    getBookItems() {
        fetch(`data/popular/${pageTitle}.json`)//
            .then(response => response.json())//

    }
}