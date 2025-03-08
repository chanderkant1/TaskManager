package com.example.demo.model;

import java.util.*;

import jakarta.persistence.*;

@Entity
@Table(name = "Tasks")
public class Task {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "taskId")
	private int id;
	@Column(name = "title")
	private String title;

	@Column(name = "description")
	private String description;

	@Column(name = "date")
	private String date;

	@Column(name = "status")
	private boolean status;
	
	@Column(name = "username")
	private String username;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	
	
}
