#import <AppKit/AppKit.h>

static const NSInteger kSize = 1024;

static void DrawSparkle(NSPoint center, CGFloat radius, NSColor *color) {
    NSBezierPath *star = [NSBezierPath bezierPath];
    [star moveToPoint:NSMakePoint(center.x, center.y + radius)];
    [star curveToPoint:NSMakePoint(center.x + radius, center.y)
         controlPoint1:NSMakePoint(center.x + radius * 0.16, center.y + radius * 0.16)
         controlPoint2:NSMakePoint(center.x + radius * 0.16, center.y - radius * 0.16)];
    [star curveToPoint:NSMakePoint(center.x, center.y - radius)
         controlPoint1:NSMakePoint(center.x + radius * 0.16, center.y - radius * 0.16)
         controlPoint2:NSMakePoint(center.x - radius * 0.16, center.y - radius * 0.16)];
    [star curveToPoint:NSMakePoint(center.x - radius, center.y)
         controlPoint1:NSMakePoint(center.x - radius * 0.16, center.y - radius * 0.16)
         controlPoint2:NSMakePoint(center.x - radius * 0.16, center.y + radius * 0.16)];
    [star curveToPoint:NSMakePoint(center.x, center.y + radius)
         controlPoint1:NSMakePoint(center.x - radius * 0.16, center.y + radius * 0.16)
         controlPoint2:NSMakePoint(center.x + radius * 0.16, center.y + radius * 0.16)];
    [star closePath];
    [color setFill];
    [star fill];
}

static void DrawIcon(void) {
    NSRect canvas = NSMakeRect(0, 0, kSize, kSize);
    CGFloat inset = 92;
    NSRect body = NSInsetRect(canvas, inset, inset);
    NSBezierPath *squircle = [NSBezierPath bezierPathWithRoundedRect:body xRadius:190 yRadius:190];

    // Soft, macOS-style drop shadow.
    NSShadow *shadow = [[NSShadow alloc] init];
    shadow.shadowColor = [NSColor colorWithWhite:0.0 alpha:0.38];
    shadow.shadowBlurRadius = 26;
    shadow.shadowOffset = NSMakeSize(0, -14);

    [NSGraphicsContext saveGraphicsState];
    [shadow set];
    [[NSColor blackColor] setFill];
    [squircle fill];
    [NSGraphicsContext restoreGraphicsState];

    // Pink gradient body.
    [NSGraphicsContext saveGraphicsState];
    [squircle addClip];
    NSGradient *gradient = [[NSGradient alloc] initWithColorsAndLocations:
        [NSColor colorWithSRGBRed:1.00 green:0.68 blue:0.80 alpha:1.0], 0.0,
        [NSColor colorWithSRGBRed:0.95 green:0.42 blue:0.64 alpha:1.0], 0.52,
        [NSColor colorWithSRGBRed:0.79 green:0.23 blue:0.49 alpha:1.0], 1.0,
        nil];
    [gradient drawInRect:body angle:-90];

    // Top gloss.
    NSRect glossRect = NSMakeRect(body.origin.x, NSMidY(body), body.size.width, body.size.height / 2);
    NSGradient *gloss = [[NSGradient alloc] initWithStartingColor:[NSColor colorWithWhite:1.0 alpha:0.16]
                                                     endingColor:[NSColor colorWithWhite:1.0 alpha:0.0]];
    [gloss drawInRect:glossRect angle:-90];
    [NSGraphicsContext restoreGraphicsState];

    // Inner rim.
    [NSGraphicsContext saveGraphicsState];
    NSBezierPath *rim = [NSBezierPath bezierPathWithRoundedRect:NSInsetRect(body, 2, 2) xRadius:188 yRadius:188];
    [[NSColor colorWithWhite:1.0 alpha:0.18] setStroke];
    rim.lineWidth = 3;
    [rim stroke];
    [NSGraphicsContext restoreGraphicsState];

    // A white heart with a deep-pink play glyph inside.
    CGFloat heartWidth = 480;
    CGFloat heartHeight = 444;
    CGFloat heartX = NSMidX(body) - heartWidth / 2;
    CGFloat heartY = NSMidY(body) - heartHeight / 2 + 8;
    NSBezierPath *heart = [NSBezierPath bezierPath];
    [heart moveToPoint:NSMakePoint(heartX + heartWidth * 0.50, heartY)];
    [heart curveToPoint:NSMakePoint(heartX, heartY + heartHeight * 0.62)
          controlPoint1:NSMakePoint(heartX + heartWidth * 0.18, heartY + heartHeight * 0.20)
          controlPoint2:NSMakePoint(heartX, heartY + heartHeight * 0.38)];
    [heart curveToPoint:NSMakePoint(heartX + heartWidth * 0.36, heartY + heartHeight)
          controlPoint1:NSMakePoint(heartX, heartY + heartHeight * 0.86)
          controlPoint2:NSMakePoint(heartX + heartWidth * 0.16, heartY + heartHeight)];
    [heart curveToPoint:NSMakePoint(heartX + heartWidth * 0.50, heartY + heartHeight * 0.86)
          controlPoint1:NSMakePoint(heartX + heartWidth * 0.46, heartY + heartHeight)
          controlPoint2:NSMakePoint(heartX + heartWidth * 0.50, heartY + heartHeight * 0.94)];
    [heart curveToPoint:NSMakePoint(heartX + heartWidth * 0.64, heartY + heartHeight)
          controlPoint1:NSMakePoint(heartX + heartWidth * 0.50, heartY + heartHeight * 0.94)
          controlPoint2:NSMakePoint(heartX + heartWidth * 0.54, heartY + heartHeight)];
    [heart curveToPoint:NSMakePoint(heartX + heartWidth, heartY + heartHeight * 0.62)
          controlPoint1:NSMakePoint(heartX + heartWidth * 0.84, heartY + heartHeight)
          controlPoint2:NSMakePoint(heartX + heartWidth, heartY + heartHeight * 0.86)];
    [heart curveToPoint:NSMakePoint(heartX + heartWidth * 0.50, heartY)
          controlPoint1:NSMakePoint(heartX + heartWidth, heartY + heartHeight * 0.38)
          controlPoint2:NSMakePoint(heartX + heartWidth * 0.82, heartY + heartHeight * 0.20)];
    [heart closePath];
    [[NSColor whiteColor] setFill];
    [heart fill];

    CGFloat cx = NSMidX(body) + 14;
    CGFloat cy = NSMidY(body) + 26;
    CGFloat halfHeight = 96;
    CGFloat halfWidth = 76;
    NSBezierPath *play = [NSBezierPath bezierPath];
    play.lineJoinStyle = NSLineJoinStyleRound;
    play.lineCapStyle = NSLineCapStyleRound;
    [play moveToPoint:NSMakePoint(cx - halfWidth, cy - halfHeight)];
    [play lineToPoint:NSMakePoint(cx - halfWidth, cy + halfHeight)];
    [play lineToPoint:NSMakePoint(cx + halfWidth, cy)];
    [play closePath];
    [[NSColor colorWithSRGBRed:0.78 green:0.24 blue:0.49 alpha:1.0] setFill];
    [play fill];

    // Two little sparkles for the girly finishing touch.
    NSColor *sparkle = [NSColor colorWithWhite:1.0 alpha:0.9];
    DrawSparkle(NSMakePoint(735, 742), 34, sparkle);
    DrawSparkle(NSMakePoint(312, 292), 22, sparkle);
}

int main(int argc, const char *argv[]) {
    @autoreleasepool {
        if (argc < 2) {
            fprintf(stderr, "usage: icon-gen <output.png>\n");
            return 1;
        }

        NSBitmapImageRep *rep = [[NSBitmapImageRep alloc]
            initWithBitmapDataPlanes:NULL
                          pixelsWide:kSize
                          pixelsHigh:kSize
                       bitsPerSample:8
                     samplesPerPixel:4
                            hasAlpha:YES
                            isPlanar:NO
                      colorSpaceName:NSDeviceRGBColorSpace
                         bytesPerRow:0
                        bitsPerPixel:0];
        rep.size = NSMakeSize(kSize, kSize);

        NSGraphicsContext *context = [NSGraphicsContext graphicsContextWithBitmapImageRep:rep];
        [NSGraphicsContext saveGraphicsState];
        [NSGraphicsContext setCurrentContext:context];
        [context setImageInterpolation:NSImageInterpolationHigh];
        [context setShouldAntialias:YES];

        DrawIcon();

        [NSGraphicsContext restoreGraphicsState];

        NSData *png = [rep representationUsingType:NSBitmapImageFileTypePNG properties:@{}];
        if (!png) {
            fprintf(stderr, "icon-gen: could not encode PNG\n");
            return 1;
        }

        NSString *path = [NSString stringWithUTF8String:argv[1]];
        NSError *error = nil;
        if (![png writeToFile:path options:NSDataWritingAtomic error:&error]) {
            fprintf(stderr, "icon-gen: %s\n", error.localizedDescription.UTF8String);
            return 1;
        }
    }
    return 0;
}
