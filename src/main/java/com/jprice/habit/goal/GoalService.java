package com.jprice.habit.goal;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import com.jprice.habit.goal.exception.GoalNotFoundException;

@AllArgsConstructor
@Service
public class GoalService {

  private final GoalRepository goalRepository;

  public List<Goal> getAllGoals() {
    return goalRepository.findAll();
  }

  public void addGoal(Goal goal) {
    goalRepository.save(goal);
  }

  public void deleteGoal(Long goalId) {
    if (!goalRepository.existsById(goalId)) {
      throw new GoalNotFoundException(
          "Goal with id" + goalId + " does not exist");
    }
    goalRepository.deleteById(goalId);
  }

  public void updateGoal(Goal newGoal, Long goalId) {
    if (!goalRepository.existsById(goalId)) {
      throw new GoalNotFoundException(
          "Goal with id" + goalId + " does not exist");
    }
    goalRepository.findById(goalId)
        .map(goal -> {
          goal.setName(newGoal.getName());
          goal.setDescription(newGoal.getDescription());
          goal.setStartDate(newGoal.getStartDate());
          goal.setEndDate(newGoal.getEndDate());
          goal.setTarget(newGoal.getTarget());
          return goalRepository.save(goal);
        });
  }
}
