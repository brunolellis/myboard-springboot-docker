package com.matera.myboard.post;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {

    @Autowired
    private PostRepository postRespository;
    
    @RequestMapping(path = "/posts", method = RequestMethod.GET)
    public List<Post> findAll(Pageable page) {
        return postRespository.findAll(page);
    }
    
    @RequestMapping(path = "/posts/{id}", method = RequestMethod.GET)
    public Post findById(@PathVariable Long id) {
        return postRespository.findById(id);
    }
    
    @RequestMapping(path = "/posts", method = RequestMethod.POST)
    public Post create(@RequestBody Post post) {
        return postRespository.save(post);
    }

}