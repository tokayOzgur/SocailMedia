package com.tokay.ws.gonderi;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;

import com.tokay.ws.user.User;

import lombok.Data;

@Data
@Entity
public class Gonderi {
	@Id
	@GeneratedValue
	private long id;

	@Size(min = 1, max = 1000)
	@Column(length = 1000)
	private String content;

	@Temporal(TemporalType.TIMESTAMP)
	private Date timestamp;

	@Lob
	private User user;
}
