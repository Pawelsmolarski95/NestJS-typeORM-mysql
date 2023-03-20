import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from './Profile';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  password: string;

  @Column()
  created_at: Date;
    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;



}
