CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL CHECK (type IN ('perishable', 'non-perishable')),
    description TEXT
);

CREATE TABLE pricings (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    item_id INTEGER NOT NULL,
    zone VARCHAR(50) NOT NULL,
    base_distance_in_km INTEGER NOT NULL,
    km_price NUMERIC(5, 2) NOT NULL,
    fix_price NUMERIC(10, 2) NOT NULL,
    FOREIGN KEY (organization_id) REFERENCES organizations(id),
    FOREIGN KEY (item_id) REFERENCES items(id)
);


INSERT INTO organizations (name) VALUES
('Spice Route Express'),
('Tandoori Flames'),
('Curry House');

INSERT INTO items (type, description) VALUES
('perishable', 'Chicken Tikka Masala'),
('perishable', 'Vegetable Biryani'),
('perishable', 'Palak Paneer'),
('perishable', 'Chana Masala'),
('perishable', 'Naan Bread'),
('perishable', 'Samosa'),
('perishable', 'Rogan Josh'),
('perishable', 'Butter Chicken'),
('non-perishable', 'Mango Pickle'),
('non-perishable', 'Appalam');

INSERT INTO pricings (organization_id, item_id, zone, base_distance_in_km, km_price, fix_price) VALUES
(1, 1, 'central', 5, 1.5, 10),
(1, 2, 'central', 5, 2.00, 1300),
(2, 3, 'east ', 3, 1.50, 1100),
(3, 4, 'west ', 6, 2.25, 1600),
(1, 5, 'central', 5, 1.75, 1400),
(2, 6, 'east ', 3, 1.50, 900),
(3, 7, 'west ', 6, 2.25, 1700),
(1, 8, 'central', 5, 1.00, 500),
(2, 9, 'east ', 3, 1.25, 600),
(3, 10, 'west ', 6, 2.00, 1200);