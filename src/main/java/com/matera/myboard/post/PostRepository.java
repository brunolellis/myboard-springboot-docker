package com.matera.myboard.post;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.Repository;

public interface PostRepository extends Repository<Post, Long> {
    
    List<Post> findAll(Pageable page);
    
    Post findById(Long id);

    Post save(Post post);

}
