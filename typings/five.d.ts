// Type definitions for five.js 
// Project: https://github.com/jackdcrawford/five

declare module 'five'{
    function five():number;    
    
    module five {
        export function upHigh():string;
        export function downLow():string;
        export function romain(): string;
        
        export function convertTo(anotherNumber:number):number;
        
        export function arabic():string;
        export function azerbaijani():string;
        export function basque():string;
        export function belarusian():string;
        export function bosnian():string;
        export function bulgarian():string;
        export function catalan():string;
        export function chinese():string;
        export function choctaw():string;
        export function croatian():string;
        export function czech():string;
        export function dothraki():string;
        export function dovah():string;
        export function dutch():string;
        export function elvish():string;
        export function english():string;
        export function estonian():string;
        export function finnish():string;
        export function french():string;
        export function german():string;
        export function greek():string;
        export function hebrew():string;
        export function hindi():string;
        export function hungarian():string;
        export function icelandic():string;
        export function indonesian():string;
        export function irish():string;
        export function italian():string;
        export function japanese():string;
        export function kannada():string;
        export function klingon():string;
        export function korean():string;
        export function latin():string;
        export function latvian():string;
        export function lithuanian():string;
        export function mongolian():string;
        export function norwegian():string;
        export function persian():string;
        export function piglatin():string;
        export function polish():string;
        export function portuguese():string;
        export function romanian():string;
        export function russian():string;
        export function serbian():string;
        export function slovakian():string;
        export function slovenian():string;
        export function spanish():string;
        export function swedish():string;
        export function tamil():string;
        export function telugu():string;
        export function turkish():string;
        export function ukrainian():string;
        export function welsh():string;
        
        export function morseCode():string;
        export function base():string;
        export function binary():string;
        export function binary():string;
        export function hex():string;
        export function mdFive():string;
        
        export function negative():number;
        export function loud():string;
        export function smooth():string;
        
        export function tooSlow(): number;
        
        export function isFive(): boolean;
        
        export function map<T>(array: Array<T>):Array<T>;
        export function filter<T>(array: Array<T>):Array<T>;
        export function reduce<T>(array: Array<T>): any;
        
        export function fad(): Array<string>
        export function jackson(): Array<string>
        
        export function luniz(): string;
        
        export function async(callback: (err:any, data:number)=>any):void;
        
        export function rot(word: string):string;
        export function rot(word: any):any;

        export function oclock(): string;
            
        export var valueOf: any;   
    }
    export = five;     
}
