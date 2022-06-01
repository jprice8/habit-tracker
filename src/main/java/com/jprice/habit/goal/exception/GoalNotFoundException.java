package com.jprice.habit.goal.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class GoalNotFoundException extends RuntimeException {

  public GoalNotFoundException(String msg) {
    super(msg);
  }
}
