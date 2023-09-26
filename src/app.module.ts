import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AchivemenntsController } from './achivemennts/achivemennts.controller';
import { AchivemenntsModule } from './achivemennts/achivemennts.module';
import { AchivemenntsService } from './achivemennts/achivemennts.service';
import { BlogsModule } from './blogs/blogs.module';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';
import { CoursesService } from './courses/courses.service';
import { EducationController } from './education/education.controller';
import { EducationModule } from './education/education.module';
import { EducationService } from './education/education.service';
import { ExperienceController } from './experience/experience.controller';
import { ExperienceModule } from './experience/experience.module';
import { ExperienceService } from './experience/experience.service';
import { GraphqlController } from './graphql/graphql.controller';
import { GraphqlModule } from './graphql/graphql.module';
import { GraphqlService } from './graphql/graphql.service';
import { HobbiesController } from './hobbies/hobbies.controller';
import { HobbiesModule } from './hobbies/hobbies.module';
import { HobbiesService } from './hobbies/hobbies.service';
import { InterestsController } from './interests/interests.controller';
import { InterestsModule } from './interests/interests.module';
import { InterestsService } from './interests/interests.service';
import { LanguagesModule } from './languages/languages.module';
import { MongooseService } from './mongoose/mongoose.service';
import { PortfolioController } from './portfolio/portfolio.controller';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PortfolioService } from './portfolio/portfolio.service';
import { ProjectModule } from './project/project.module';
import { ProjectService } from './project/project.service';
import { SkillTypeController } from './skill-type/skill-type.controller';
import { SkillTypeModule } from './skill-type/skill-type.module';
import { SkillTypeService } from './skill-type/skill-type.service';
import { SkillsController } from './skills/skills.controller';
import { SkillsModule } from './skills/skills.module';
import { SkillsService } from './skills/skills.service';
import { TechnologyController } from './technology/technology.controller';
import { TechnologyModule } from './technology/technology.module';
import { TechnologyService } from './technology/technology.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseController } from '@/mongoose/mongoose.controller';
import { ProjectController } from '@/project/project.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    AchivemenntsModule,
    SkillsModule,
    HobbiesModule,
    BlogsModule,
    LanguagesModule,
    InterestsModule,
    ExperienceModule,
    SkillTypeModule,
    TechnologyModule,
    ProjectModule,
    EducationModule,
    CoursesModule,
    MongooseModule,
    GraphqlModule,
    PortfolioModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [
    AppController,
    AchivemenntsController,
    SkillsController,
    HobbiesController,
    InterestsController,
    ExperienceController,
    SkillTypeController,
    TechnologyController,
    ProjectController,
    EducationController,
    CoursesController,
    MongooseController,
    GraphqlController,
    PortfolioController,
  ],
  providers: [
    AppService,
    AchivemenntsService,
    SkillsService,
    HobbiesService,
    InterestsService,
    ExperienceService,
    SkillTypeService,
    TechnologyService,
    ProjectService,
    EducationService,
    CoursesService,
    MongooseService,
    GraphqlService,
    PortfolioService,
  ],
})
export class AppModule {}
