package com.example.demo.repository;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Task;

public interface TaskRepository  extends JpaRepository<Task, Integer>{
	public List<Task> findAllByUsername(String username);
}
