package com.jprice.habit.goal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/goals")
public class GoalController {

  @GetMapping
  public List<Goal> getAllGoals() {
    List<Goal> goals = Arrays.asList(
            new Goal(1L, "Run", "Running is good", 60),
            new Goal(1L, "Run", "Running is good", 60));
    return goals;
  }
}
