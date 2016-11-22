import {Pipe} from 'angular2/core';

@Pipe({
    name: 'categoryList'
})
export class CategoryListPipe {
    transform(mediaItems,category) {
        console.log(category);
        var mediaItems_filtered = [];
        mediaItems.forEach(mediaItem => {
            if (mediaItem.category==category)  {
                mediaItems_filtered.push(mediaItem);
            }
        });
        return mediaItems_filtered;
    }
}