package com.springbt.busreservation.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bus")
public class Bus {

	private long id;
	private String name;
	private String busFrom;
	private String busTo;
	
	public Bus() {
		
	}
	
	public Bus(String name, String busFrom, String busTo) {
		this.name = name;
		this.busFrom = busFrom;
		this.busTo = busTo;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "name", nullable = false)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Column(name = "busFrom", nullable = false)
	public String getBusFrom() {
		return busFrom;
	}
	public void setBusFrom(String busFrom) {
		this.busFrom = busFrom;
	}
	
	@Column(name = "email_address", nullable = false)
	public String getBusTo() {
		return busTo;
	}
	public void setBusTo(String busTo) {
		this.busTo = busTo;
	}

	@Override
	public String toString() {
		return "Bus [id=" + id + ", name=" + name + ", busFrom=" + busFrom + ", busTo=" + busTo
				+ "]";
	}
	
}