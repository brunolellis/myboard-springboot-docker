package com.matera.myboard.api.post;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.Repository;

public interface PostRepository extends Repository<Post, Long> {
    
    List<Post> findAll(Pageable page);
    
    List<Post> findTop10ByOrderByIdDesc();
    
    Post findById(Long id);

    Post save(Post post);
    
    @Transactional
    void deleteById(Long id);

}
