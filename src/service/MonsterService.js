import axios from 'axios';

class MonsterService {
    static async getMonsters() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }

    static getMonsterImageUrl(id) {
        return `https://robohash.org/${id}?set=set2&size=180x180`;
    }
}

export default MonsterService;