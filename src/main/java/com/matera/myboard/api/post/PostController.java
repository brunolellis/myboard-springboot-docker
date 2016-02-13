package com.matera.myboard.api.post;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.matera.myboard.api.ApiController;

@RestController
public class PostController extends ApiController {

    @Autowired
    private PostRepository postRespository;
    
    @RequestMapping(path = "/posts", method = RequestMethod.GET)
    public List<Post> findAll() {
//        return postRespository.findAll(page);
        return postRespository.findTop10ByOrderByIdDesc();
    }
    
    @RequestMapping(path = "/posts/{id}", method = RequestMethod.GET)
    public Post findById(@PathVariable Long id) {
        return postRespository.findById(id);
    }
    
    @RequestMapping(path = "/posts", method = RequestMethod.POST)
    public Post create(@RequestBody Post post) {
        return postRespository.save(post);
    }
    
    @RequestMapping(path = "/posts/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<String> removeById(@PathVariable Long id) {
        postRespository.deleteById(id);
        return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
    }

}