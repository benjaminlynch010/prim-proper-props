# Prim Proper Props

We're creating an application that allows party planners to plan prim and proper parties.

## Setup
You'll need a `prim-proper-props` database. Follow the guidance in the `database.sql` file to create tables.

## Base Requirements

This application is fully functional! But `App.js` is getting really crowded. It could use a proper clean up! Add components to clean up `App.js`

Create the new components in the following order (increasing level of difficulty):

1. Header
1. Footer
1. Guest List
1. Dinner Supplies
1. Guest Form

The application should still work the same way. Here is what `App.js` could render when the refactor is complete:

```JSX
<div className="App">
  <Header />
  <h2>Party Leader</h2>
  {guestList[0] && <h3>{guestList[0].name}</h3>}
  <GuestForm
    getGuests={getGuests}
  />
  <GuestList guestList={guestList} />
  <DinnerSupplies guestList={guestList} />
  <Footer />
</div>
```

## Stretch Goals

### Leader

Create a `PartyLeader` Component so that the lines in `App.js`:

```JSX
<h2>Party Leader</h2>
{guestList[0] && <h3>{guestList[0].name}</h3>}
```

Can be replaced by:

```JSX
<PartyLeader leader={guestList[0]}/>
```

### Silverware

Create a `SilverWare` Component as a reusable Component so that the lines in `DinnerSupplies`:

```JSX
<div>
  Spoons: {count * 2}
</div>
<div>
  Forks: {count * 2}
</div>
<div>
  Knives: {count * 2}
</div>
```

Can be replaced by:

```JSX
<SilverWare name="Spoons" count={count} />
<SilverWare name="Forks" count={count} />
<SilverWare name="Knives" count={count} />
```

### Remove a guest

Allow the user to remove a guest from the list by adding a `Delete` button to teach row in the table and removing them from the database.

### Create a Guest Component

Create a `Guest` component that is the `<tr>` of the table and pass props accordingly.
