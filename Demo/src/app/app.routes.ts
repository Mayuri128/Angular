import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { HtmlComponent } from './html/html.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { CSSComponent } from './css/css.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';

export const routes: Routes = [
    {path : '',  title:'Home'  ,component : HomeComponent},
    {path : 'about', title:'about',component : AboutComponent},
    {path : 'contact', title:'contact',component : ContactComponent},
    {path : 'SkillSet', title:'skill-Set',component : SkillsetComponent},
    {path : 'SkillSet', children :[{
        path : 'html', title:'skillset | html', component: HtmlComponent
    }]},
    {path : 'SkillSet', children :[{
        path : 'css', title:'skillset | Css', component: CSSComponent
    }]},
    {path : 'SkillSet', children :[{
        path : 'javascript', title:'skillset | Angular', component: JavascriptComponent
    }]},
    {path : 'SkillSet', children :[{
        path : 'angular', title:'skillset | Angular', component: AngularComponent
    }]},
    {path : 'AngularAPI',    title:'Angular',component : PostComponent},
    {path : 'AngularAPI',  children:[
        {path : 'html', title:'AngularAPI | Html',  component: HtmlComponent}
    ]},
    {path: '**', title:'oops' ,component: PageNotFoundComponent} //Wildcard route for a 404 page
    
];
