package com.jprice.habit.goal;

import lombok.*;

import java.util.Date;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Goal {
  private Long id;
  private String name;
  private String description;
//  private Date startDate;
//  private Date endDate;
  private Integer target;
}
