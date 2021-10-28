import axios from "axios";

class PostService {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
}

export { PostService };
