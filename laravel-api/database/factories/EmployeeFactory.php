<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'sex' => $this->faker->randomElement(['Male', 'Female', 'Other']),
            'date_of_birth' => $this->faker->date(),
            'phone' => $this->faker->numerify('0#########'),
            'hobby' =>  $this->faker->paragraph(3),
            'photo_path' =>$this->faker->mimeType(),
            'career_goals' => $this->faker->randomElement(['CEO', 'CTO', 'CFO', 'UFO', 'FIFA', 'ASCII', 'BBQ']),
            'education' =>  $this->faker->randomElement(['Elementary School', 'University', 'Undergraduated', 'Sky Garden']),
            'major' =>  $this->faker->randomElement(['IT', 'MBA', 'PHARMACY', 'EDUCATION', 'PR']),
            'experience' => $this->faker->paragraph(5),
            'skill' => $this->faker->paragraph(10),
            'certification' =>  $this->faker->randomElement(['IELTS: 10.0', 'TOIEC: 1000', 'JLPT: N0', 'IT Project Manager By Google']),
        ];
    }
}
