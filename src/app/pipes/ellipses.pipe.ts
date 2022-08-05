import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform
{
    transform(value: string, max = 12, append = '...'): string
    {
		if (value && value.length > max) {
			return `${value.slice(0, max)}${append}`;
		}
		
		return value;
    }
}