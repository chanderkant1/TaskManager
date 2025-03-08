package com.example.demo.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;

@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {
	@Autowired
	TaskRepository trep;
	
	@PostMapping("/inserttask")
	public Task insertTask(@RequestBody Task t) {
		return trep.save(t);
	}
	
	@GetMapping("/retrieve")
	public List<Task> getTask(){
		return trep.findAll();
	}
	
	@GetMapping("/retrievebyname/{uname}")
	public List<Task> getByName(@PathVariable("uname") String name){
		return trep.findAllByUsername(name);
	}
	@GetMapping("retreivebyid/{tid}")
	public Optional<Task> getById(@PathVariable("tid") int id) {
		Optional<Task> t = null;
		t= trep.findById(id);
		return t;
	}
	
	@PutMapping("/update/{tid}")
	public ResponseEntity<Task> updateTask(@RequestBody Task t,@PathVariable("tid") int id){
		Optional<Task> opttask = trep.findById(id);
		Task t2 = null;
		if(opttask.isPresent()) {
			t2 = opttask.get();
			t2.setTitle(t.getTitle());
			t2.setDescription(t.getDescription());
			t2.setDate(t.getDate());
			t2.setStatus(t.isStatus());
			trep.save(t2);
			return new ResponseEntity<>(t2, HttpStatus.OK);
			
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/delete/{tid}")
	public void deleteById(@PathVariable("tid") int id) {
		trep.deleteById(id);
	}
}
