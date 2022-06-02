package com.jprice.habit.goal;

import lombok.*;

import java.time.LocalDate;

import javax.persistence.*;

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
  private LocalDate startDate;
  private LocalDate endDate;
  private Integer target;
  private Boolean sunday;
  private Boolean monday;
  private Boolean tuesday;
  private Boolean wednesday;
  private Boolean thursday;
  private Boolean friday;
  private Boolean saturday;
}
