#!/bin/sh

# Create Android folder structure
mkdir -p ../res/drawable-hdpi
mkdir -p ../res/drawable-ldpi
mkdir -p ../res/drawable-mdpi

# Copy and resize icons for Android HDPI
cp adk.png ../res/drawable-hdpi
mogrify -resize 72x72 ../res/drawable-hdpi/adk.png

cp logbook.png ../res/drawable-hdpi/fahrtenbuch.png
mogrify -resize 72x72 ../res/drawable-hdpi/fahrtenbuch.png

cp info.png ../res/drawable-hdpi
mogrify -resize 72x72 ../res/drawable-hdpi/info.png

cp theory.png ../res/drawable-hdpi/sonstige.png
mogrify -resize 72x72 ../res/drawable-hdpi/sonstige.png

cp paid.png ../res/drawable-hdpi/status_bezahlt.png
mogrify -resize 32x32 ../res/drawable-hdpi/status_bezahlt.png

cp test.png ../res/drawable-hdpi/pruefung.png
mogrify -resize 72x72 ../res/drawable-hdpi/pruefung.png

cp logbook_available.png ../res/drawable-hdpi/status_fahrtenbucheintrag.png
mogrify -resize 32x32 ../res/drawable-hdpi/status_fahrtenbucheintrag.png

cp birthday.png ../res/drawable-hdpi/status_geburtstag.png
mogrify -resize 32x32 ../res/drawable-hdpi/status_geburtstag.png

cp synced.png ../res/drawable-hdpi/status_uebertragen.png
mogrify -resize 32x32 ../res/drawable-hdpi/status_uebertragen.png

cp signed.png ../res/drawable-hdpi/status_unterschrieben.png
mogrify -resize 32x32 ../res/drawable-hdpi/status_unterschrieben.png

cp marked.png ../res/drawable-hdpi/status_vorgemerkt.png
mogrify -resize 32x32 ../res/drawable-hdpi/status_vorgemerkt.png

cp moon.png ../res/drawable-hdpi/sundown.png
mogrify -resize 32x32 ../res/drawable-hdpi/sundown.png

cp sun.png ../res/drawable-hdpi/sunrise.png
mogrify -resize 32x32 ../res/drawable-hdpi/sunrise.png

cp phone.png ../res/drawable-hdpi/telefon.png
mogrify -resize 72x72 ../res/drawable-hdpi/telefon.png

cp paid.png ../res/drawable-hdpi/zahlung.png
mogrify -resize 72x72 ../res/drawable-hdpi/zahlung.png


# Copy and resize icons for Android LDPI
cp adk.png ../res/drawable-ldpi
mogrify -resize 36x36 ../res/drawable-ldpi/adk.png

cp logbook.png ../res/drawable-ldpi/fahrtenbuch.png
mogrify -resize 36x36 ../res/drawable-ldpi/fahrtenbuch.png

cp info.png ../res/drawable-ldpi
mogrify -resize 36x36 ../res/drawable-ldpi/info.png

cp theory.png ../res/drawable-ldpi/sonstige.png
mogrify -resize 36x36 ../res/drawable-ldpi/sonstige.png

cp paid.png ../res/drawable-ldpi/status_bezahlt.png
mogrify -resize 36x36 ../res/drawable-ldpi/status_bezahlt.png

cp test.png ../res/drawable-ldpi/pruefung.png
mogrify -resize 36x36 ../res/drawable-ldpi/pruefung.png

cp logbook_available.png ../res/drawable-ldpi/status_fahrtenbucheintrag.png
mogrify -resize 16x16 ../res/drawable-ldpi/status_fahrtenbucheintrag.png

cp birthday.png ../res/drawable-ldpi/status_geburtstag.png
mogrify -resize 16x16 ../res/drawable-ldpi/status_geburtstag.png

cp synced.png ../res/drawable-ldpi/status_uebertragen.png
mogrify -resize 16x16 ../res/drawable-ldpi/status_uebertragen.png

cp signed.png ../res/drawable-ldpi/status_unterschrieben.png
mogrify -resize 16x16 ../res/drawable-ldpi/status_unterschrieben.png

cp marked.png ../res/drawable-ldpi/status_vorgemerkt.png
mogrify -resize 16x16 ../res/drawable-ldpi/status_vorgemerkt.png

cp moon.png ../res/drawable-ldpi/sundown.png
mogrify -resize 16x16 ../res/drawable-ldpi/sundown.png

cp sun.png ../res/drawable-ldpi/sunrise.png
mogrify -resize 16x16 ../res/drawable-ldpi/sunrise.png

cp phone.png ../res/drawable-ldpi/telefon.png
mogrify -resize 36x36 ../res/drawable-ldpi/telefon.png

cp paid.png ../res/drawable-ldpi/zahlung.png
mogrify -resize 36x36 ../res/drawable-ldpi/zahlung.png

# Copy and resize icons for Android MDPI
cp adk.png ../res/drawable-mdpi
mogrify -resize 47x47 ../res/drawable-mdpi/adk.png

cp logbook.png ../res/drawable-mdpi/fahrtenbuch.png
mogrify -resize 47x47 ../res/drawable-mdpi/fahrtenbuch.png

cp info.png ../res/drawable-mdpi
mogrify -resize 47x47 ../res/drawable-mdpi/info.png

cp theory.png ../res/drawable-mdpi/sonstige.png
mogrify -resize 47x47 ../res/drawable-mdpi/sonstige.png

cp paid.png ../res/drawable-mdpi/status_bezahlt.png
mogrify -resize 47x47 ../res/drawable-mdpi/status_bezahlt.png

cp test.png ../res/drawable-mdpi/pruefung.png
mogrify -resize 47x47 ../res/drawable-mdpi/pruefung.png

cp logbook_available.png ../res/drawable-mdpi/status_fahrtenbucheintrag.png
mogrify -resize 24x24 ../res/drawable-mdpi/status_fahrtenbucheintrag.png

cp birthday.png ../res/drawable-mdpi/status_geburtstag.png
mogrify -resize 24x24 ../res/drawable-mdpi/status_geburtstag.png

cp synced.png ../res/drawable-mdpi/status_uebertragen.png
mogrify -resize 24x24 ../res/drawable-mdpi/status_uebertragen.png

cp signed.png ../res/drawable-mdpi/status_unterschrieben.png
mogrify -resize 24x24 ../res/drawable-mdpi/status_unterschrieben.png

cp marked.png ../res/drawable-mdpi/status_vorgemerkt.png
mogrify -resize 24x24 ../res/drawable-mdpi/status_vorgemerkt.png

cp moon.png ../res/drawable-mdpi/sundown.png
mogrify -resize 24x24 ../res/drawable-mdpi/sundown.png

cp sun.png ../res/drawable-mdpi/sunrise.png
mogrify -resize 24x24 ../res/drawable-mdpi/sunrise.png

cp phone.png ../res/drawable-mdpi/telefon.png
mogrify -resize 47x47 ../res/drawable-mdpi/telefon.png

cp paid.png ../res/drawable-mdpi/zahlung.png
mogrify -resize 47x47 ../res/drawable-mdpi/zahlung.png
