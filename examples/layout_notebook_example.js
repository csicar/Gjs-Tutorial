#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;
const Lang = imports.lang;

Gtk.init(null);

class MyWindow extends Gtk.Window {
    constructor() {
        super({ title: "Simple Notebook Example" });
        this.border_width = 3;

        this.notebook = new Gtk.Notebook();
        this.add(this.notebook);

        this.page1 = new Gtk.Box();
        this.page1.border_width = 10;
        this.page1.add(new Gtk.Label({ label: "Default Page!" }));
        this.notebook.append_page(this.page1, new Gtk.Label({ label: "Plain Title" }));

        this.page2 = new Gtk.Box();
        this.page2.border_width = 10;
        this.page2.add(new Gtk.Label({ label: "A page with an image for a title." }));
        this.notebook.append_page(
            this.page2,
            Gtk.Image.new_from_icon_name("help-about", Gtk.IconSize.MENU)
        );
    }
}

GObject.registerClass(MyWindow);

let win = new MyWindow();
win.connect("delete-event", Gtk.main_quit);
win.show_all();
Gtk.main();
