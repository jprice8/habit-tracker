package com.jprice.habit.goal;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

  @PostMapping
  public void addGoal(@RequestBody Goal goal) {
    goalService.addGoal(goal);
  }

  @DeleteMapping(path = "/delete/{goalId}")
  public void deleteGoal(@PathVariable("goalId") Long goalId) {
    goalService.deleteGoal(goalId);
  }

  @PutMapping(path = "/{goalId}")
  public void updateGoal(@RequestBody Goal newGoal, @PathVariable Long goalId) {
    goalService.updateGoal(newGoal, goalId);
  }
}
