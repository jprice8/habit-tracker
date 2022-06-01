package com.jprice.habit.goal;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Goal {
  @Id
  @SequenceGenerator(
      name = "goal_sequence",
      sequenceName = "goal_sequence",
      allocationSize = 1
  )
  @GeneratedValue(
      generator = "goal_sequence",
      strategy = GenerationType.SEQUENCE
  )
  private Long id;
  private String name;
  private String description;
  private Integer target;
}
