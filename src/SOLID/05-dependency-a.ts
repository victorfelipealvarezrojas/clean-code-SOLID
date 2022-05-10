import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {

    const provider = new JsonDatabaseService();
    const providerService2 = new LocalDataBaseService();
    const postService = new PostService(providerService2);

    const posts = await postService.getPosts();

    console.log({ posts })


})();