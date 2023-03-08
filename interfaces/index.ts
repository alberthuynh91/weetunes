// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Artist = {
  attributes: {
    href: string
  }
  label: string
}

export type Category = {
  attributes: {
    'im:id': string
    label: string
    scheme: string
    term: string
  }
}

export type Image = {
  attributes: {
    height: string
  }
  label: string
}

export type Link = {
  attributes: {
    href: string
    rel: string
    type: string
  }
}

export type Price = {
  attributes: {
    amount: string
    currency: string
  }
  label: string
}

export type ReleaseDate = {
  attributes: {
    label: string
  }
  label: string
}

export type Rights = {
  label: string
}

export type Name = {
  label: string
}

export type Title = {
  label: string
}

export type ID = {
  attributes: {
    'im:id': string
  }
  label: string
}


export type Album = {
  artist: Artist
  category: Category
  image: Image[]
  link: Link
  price: Price
  releaseDate: ReleaseDate
  rights: Rights
  title: Title
  name: Name
  id: ID
};
