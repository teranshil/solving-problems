class Wish {
    constructor(name, child, price) {
        this.name = name;
        this.child = child;
        this.price = price;
    }
}

class WishManager {

    constructor() {
        this.wishes = new Map;
    }

    executeCommand(string) {
        let command = string.slice(0, string.indexOf(' '));
        command = this.lowerCaseFirstLetter( command ).trim();
        if( command in this ) {
            return this[command]( string.slice(string.indexOf(' ') + 1) );
        }

        return 'Incorrect command!';
    }

    addWish(params) {
        const name = params.slice(0, params.indexOf(';'));
        const [ price, childName ] = params.slice(params.indexOf(';') + 1).split(';');

        const wish = new Wish(name, childName, parseFloat(price));
        if(!this.wishes.has(childName)) this.wishes.set(childName, []);
        this.wishes.get(childName).push(wish);

        return 'Wish added';
    }

    deleteWishes(params) {
        const name = params;
        if(!this.wishes.has(name)) return 'No Wishes found';

        const wishesSize = this.wishes.get(name).length;
        this.wishes.delete(name);

        return `${wishesSize} Wishes deleted`;
    }

    findWishesByPriceRange(params) {
        const [low, high] = params.split(';').map(Number);

        let wishesInRange = [];
        for (const [ child, wishes ] of this.wishes) {
            wishes.forEach( wish => {
               if(wish.price >= low && wish.price <= high) wishesInRange.push(wish);
            });
        }

        if(wishesInRange.length === 0) return 'No Wishes found';

        wishesInRange = wishesInRange.sort( (a, b) => { a.name.localeCompare(b) });
        return wishesInRange.map( wish => `{${ wish.name };${wish.child};${wish.price.toFixed(2)}}` ).join('\n');
    }

    findWishesByChild(params) {
        const name = params;
        if(!this.wishes.has(name)) return 'No Wishes found';
        if(this.wishes.get(name).length === 0) return 'No Wishes found';

        const wishes = this.wishes.get(name).sort( (a, b) => { a.name.localeCompare(b) });

        return wishes.map( wish => `{${ wish.name };${wish.child};${wish.price.toFixed(2)}}` ).join('\n');
    }


    lowerCaseFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

}

const numberCommands = parseInt( gets() );
const wishManager = new WishManager();

for (let index = 0; index < numberCommands; index++) {
    print( wishManager.executeCommand( gets() ) );
}
