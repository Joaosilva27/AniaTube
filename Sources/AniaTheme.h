#import <AppKit/AppKit.h>

NS_ASSUME_NONNULL_BEGIN

/// The pink palette and small drawing helpers used by AniaTube's native chrome.
@interface AniaTheme : NSObject

+ (NSColor *)cream;       // Window / page background
+ (NSColor *)blush;       // Slightly deeper pink background
+ (NSColor *)petal;       // Soft pink fills
+ (NSColor *)rose;        // Mid pink
+ (NSColor *)pink;        // Primary accent
+ (NSColor *)pinkDeep;    // Accent text / controls
+ (NSColor *)plum;        // Primary text
+ (NSColor *)plumSoft;    // Secondary text
+ (NSColor *)lavender;    // Secondary accent

+ (NSGradient *)titlebarGradient;
+ (NSGradient *)miniPlayerGradient;
+ (NSGradient *)logoGradient;

+ (void)drawHeartInRect:(NSRect)rect color:(NSColor *)color;

@end

/// A borderless rounded button with a soft pink pill background and wine-pink
/// title. Used for the controls in the native titlebar.
@interface AniaPillButton : NSButton

- (instancetype)initWithPillTitle:(NSString *)title
                           target:(nullable id)target
                           action:(nullable SEL)action;
- (void)setPillTitle:(NSString *)title;

@end

NS_ASSUME_NONNULL_END
