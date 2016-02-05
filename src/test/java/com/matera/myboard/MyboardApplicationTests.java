package com.matera.myboard;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;

import com.matera.myboard.MyboardApplication;

import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MyboardApplication.class)
@WebAppConfiguration
public class MyboardApplicationTests {

	@Test
	public void contextLoads() {
	}

}
