import { NgModule,Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "titleCase"
})
export class titleCaseTransform implements PipeTransform {

    transform(str: string ):string {
      let  _str = str.toLowerCase().split(' ').map((word)=> {
            return word.replace(word[0], word[0].toUpperCase());
        });
         return _str.join(' ');
    }
}
@NgModule({
    declarations: [ titleCaseTransform ],
    exports: [ titleCaseTransform ]
  })
  export class titleCaseTransformModule {}