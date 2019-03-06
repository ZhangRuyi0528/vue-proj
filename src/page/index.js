import HelloWorld from '@/components/HelloWorld'
import SVG from '@/page/Svg'
import Temp from '@/components/Temp'

export const pages = [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
},
{
    path: '/svg',
    name: 'svg',
    component: SVG
},
{
    path: '/temp',
    name: 'temp',
    component: Temp
}
];
