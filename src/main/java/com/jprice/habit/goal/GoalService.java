package com.jprice.habit.goal;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
