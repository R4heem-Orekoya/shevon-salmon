import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Shevon Salmon')
    .items([
      S.documentTypeListItem('gearsPage').title('Gears Page'),
      S.documentTypeListItem('wallpapersPage').title('Wallpapers Page'),
      S.documentTypeListItem('galleryPage').title('Gallery Page'),
      S.documentTypeListItem('homePage').title('Home Page'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId()
          && ![
            'gearsPage', 'wallpapersPage', 'galleryPage', 'homePage'
          ]
            .includes(item.getId()!),
      ),
    ])
