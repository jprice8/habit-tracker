package com.jprice.habit.goal;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(path = "api/v1/goals")
public class GoalController {

  private final GoalService goalService;

  @GetMapping
  public List<Goal> getAllGoals() {
    return goalService.getAllGoals();
  }
}
