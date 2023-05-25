import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MainComponent } from "./components/main/main.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { NgModule } from "@angular/core";
import { ProductPageComponent } from "./components/product-page/product-page.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'main', component: MainComponent},
    {path: 'main/:id', component: ProductPageComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

