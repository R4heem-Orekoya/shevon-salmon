import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Shevon Salmon')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('gearsPage').title('Gears Page'),
      S.documentTypeListItem('wallpapersPage').title('Wallpapers Page'),
      S.documentTypeListItem('galleryPage').title('Gallery Page'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId()
          && ![
            'post', 'category', 'author',
            'gearsPage', 'wallpapersPage', 'galleryPage'
          ]
            .includes(item.getId()!),
      ),
    ])
