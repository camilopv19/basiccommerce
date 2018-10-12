// import { Point } from './point';
import {LikeComponent} from './like.component';
// import {LikeComponent} from './like.component';

// var point = new Point(2, 6);
// point.draw();

let component = new LikeComponent(12, true);

component.onClick();

console.log(`Likes count: ${component.likesCount}, isSelected: ${component.isSelected}`);

